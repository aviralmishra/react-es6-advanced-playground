import React from 'react';

import AlbumList from '../AlbumList';

import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Album list', () => {
  const testProps = {
    'albums': {
      'album-1001': {
        'id': 'album-1001',
        'title': 'We Were Here',
        'description': 'We Were Here is the first album by Joshua Radin.',
        'released': '2006-06-13',
        'artistId': 'artist-1001'
      },
      'album-1002': {
        'id': 'album-1002',
        'title': 'Simple Times',
        'description': 'Simple Times is the second album by Joshua Radin.',
        'released': '2008-09-09',
        'artistId': 'artist-1002'
      }
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(<AlbumList {...testProps}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('AlbumContainer').length).toBe(2);
  });
});
