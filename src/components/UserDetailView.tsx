import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Define the User type
interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const UserDetailView: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${userId}`);
        setUser(response.data.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div>
      <h2>User Detail</h2>
      {user && (
        <div>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <p>Avatar:</p>
          <img src={user.avatar} alt="avatar" />
        </div>
      )}
    </div>
  );
};

export default UserDetailView;
