import { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import AddProperty from './AddProperty';

const EditProperty = () => {
    const {propertyId} = useParams();
  return (
    <Fragment>
        <AddProperty propertyId={propertyId} edit/>
    </Fragment>
  );
}

export default EditProperty;