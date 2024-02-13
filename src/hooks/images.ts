import {
  CameraRoll,
  GroupTypes,
  PhotoIdentifiersPage,
} from '@react-native-camera-roll/camera-roll';
import { useState } from 'react';
import {
  PermissionsAndroid,
  PermissionStatus,
  Platform,
  StyleSheet,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { PERMISSIONS, request, check } from 'react-native-permissions';
const initialSelectedAlbumConfig = {
  groupTypes: 'All',
  groupName: '',
  title: 'All Photos',
};

export const useImages = () => {
  const [albums, setAlbums] = useState([
    { value: 'All Photos', label: 'All Photos' },
  ]);
  const [currentAlbum, setCurrentAlbums] = useState({
    value: 'All Photos',
    label: 'All Photos',
  });
  const [selectedAlbum, setSelectedAlbum] = useState(
    initialSelectedAlbumConfig,
  );

  const [images, setImages] = useState<PhotoIdentifiersPage>({
    edges: [],
  } as unknown as PhotoIdentifiersPage);

  async function hasAndroidPermission() {
    const OsVer = await DeviceInfo.getApiLevel()
    console.log(OsVer);

    const permission = OsVer > 32 ? PERMISSIONS.ANDROID.READ_MEDIA_VIDEO : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    const hasPermission = await check(permission);
    console.log({ hasPermission });

    if (hasPermission === 'granted') {
      return true;
    }
    const status = await request(permission);

    if (status === 'granted') {
      return true;
    } else {
      return false;
    }
  }

  const convertLocalIdentifierToAssetLibrary = (
    localIdentifier: any,
    ext: any,
  ) => {
    const hash = localIdentifier.split('/')[0];
    // return `assets-library://asset/asset.${ext}?id=${hash}&ext=${ext}`;
    return `assets-library://asset/asset.${ext}?id=${hash}`;
  };

  const getAlbums_ = async () => {
    if (Platform.OS === 'android') {
      await hasAndroidPermission();
    }
    CameraRoll.getAlbums({
      assetType: 'All',
    })
      .then(r => {
        let albumList: any = [];
        r.forEach(item => {
          const albumItem = { value: item.title, label: `${item.title}  (${item.count})` };
          albumList.push(albumItem);
        });
        albumList.sort((a: any, b: any) => a.label.localeCompare(b.label));
        setAlbums([...albums, ...albumList]);
      })
      .catch(err => { });
  };
  // const getImages = async () => {
  //   if (Platform.OS === 'android') {
  //     await hasAndroidPermission();
  //   }
  //   CameraRoll.getPhotos({
  //     first: 500,
  //     assetType: 'All',
  //     groupTypes: selectedAlbum.groupTypes as GroupType,
  //     groupName: selectedAlbum.groupName,
  //   })
  //     .then(r => {
  //       setImages(r);
  //     })
  //     .catch(err => {
  //       console.log('error', err);
  //     });
  // };
  const getImages = async () => {
    if (Platform.OS === 'android') {
      await hasAndroidPermission();
    }
    let result = await CameraRoll.getPhotos({
      first: 500,
      assetType: 'All',
      groupTypes: selectedAlbum.groupTypes as GroupType,
      groupName: selectedAlbum.groupName,
      include: ['filename', 'fileSize', 'location', 'playableDuration'],
    });

    result.edges.map(async edge => {
      if (Platform.OS === 'ios') {
        edge.node.image.uri = convertLocalIdentifierToAssetLibrary(
          edge.node.image.uri.replace('ph://', ''),
          edge.node.type === 'image' ? 'jpg' : 'mov',
        );
      }
      return;
    });




    setImages(result);
  };
  const showFullImages = () => {
    setSelectedAlbum(initialSelectedAlbumConfig);
  };

  return {
    albums,
    getAlbums_,
    getImages,
    images,
    selectedAlbum,
    setSelectedAlbum,
    showFullImages,
    currentAlbum,
    setCurrentAlbums,
  };
};

export enum STORAGE_ACCESS {
  GRANDED = 'granted',
  DENIED = 'denied',
  NEVER_ASK_AGAIN = 'never_ask_again',
}
