import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBListGroup, MDBListGroupItem, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Profile.css'; // Import CSS file for styling

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    email: 'john@example.com',
    weight: '75',
    height: '180',
    sex: 'male',
    allergens: ['Peanuts', 'Shellfish']
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from backend when component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/v1/user/profile'); // Change the URL as per your backend endpoint
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='profile-page'>
      <div className='container py-5 mt-10px'>
        <div className='row'>
          <MDBCol lg='4'>
            <MDBCard className='mb-4'>
              <MDBCardBody className='text-center'>
                <MDBCardImage
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                  alt='avatar'
                  className='rounded-circle profile-avatar'
                />
                <p >{userData.username}</p>
                <p >{userData.email}</p>
                <div className='d-flex justify-content-center mb-2'>
                  <Link to="/edit-profile">
                    <MDBBtn>Edit Profile</MDBBtn>
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg='8'>
            <MDBCard className='mb-4 mb-lg-0'>
              <MDBCardBody className='p-0'>
                <MDBListGroup flush className='rounded-3'>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                    <MDBCardText>Username:</MDBCardText>
                    <MDBCardText>{userData.username}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                    <MDBCardText>E-mail:</MDBCardText>
                    <MDBCardText>{userData.email}</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                    <MDBCardText>Weight:</MDBCardText>
                    <MDBCardText>{userData.weight} kg</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                    <MDBCardText>Height:</MDBCardText>
                    <MDBCardText>{userData.height} cm</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center p-3'>
                    <MDBCardText>Sex:</MDBCardText>
                    <MDBCardText>{userData.sex}</MDBCardText>
                  </MDBListGroupItem>
                  {/* Add more items as needed */}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </div>
    </section>
  );
}



