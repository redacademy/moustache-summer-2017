import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string'
  }
};

const realm =  new Realm({schema: [Fave]})
export default realm