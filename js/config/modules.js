import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string'
  }
};

export const favesQuery = () =>  {
  try {
    return realm.objects('Fave').map(it => Object.assign({}, it));
  } catch (error) {
    console.log(error);
  }
}

export const faveToggle =(id) => {
  realm.write(() => {
    let faves = realm.objects('Fave').filtered('id == $0', id)
    if (typeof faves !== 'undefined' && faves.length) {
      realm.delete(faves[0]);
    } else {
      realm.create('Fave', { id: id })
    }
  })
  return realm.objects('Fave');
}

const realm =  new Realm({schema: [Fave]})
export default realm