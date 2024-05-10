// src/components/FormComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure, updateFormData } from '../features/formSlice';
import { fetchData } from '../servies/api';

const FormComponent = () => {
  const dispatch = useDispatch();
  const { data, formData, loading, error } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(fetchDataStart());
    fetchData()
      .then((data) => dispatch(fetchDataSuccess(data)))
      .catch((error) => dispatch(fetchDataFailure(error)));
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <form>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        {/* Add more form fields as needed */}
      </form>
    </div>
  );
};

export default FormComponent;
