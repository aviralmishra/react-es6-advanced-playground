import React from 'react';

import AlbumList from '../AlbumList';
import renderer from 'react-test-renderer';

describe('Album list', () => {
  const testProps = {
    'albums': {
      'album-1001': {
        'id': 'album-1001',
        'title': 'We Were Here'
      },
      'album-1002': {
        'id': 'album-1002',
        'title': 'Simple Times'
      }
    },
    'albumActions': {
      findArtist: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const albumListNode = renderer.create(<AlbumList {...testProps}/>).toJSON();
    console.info(albumListNode);

    expect(albumListNode).toMatchSnapshot();
    expect(albumListNode.children.length).toBe(4);
  });
});
