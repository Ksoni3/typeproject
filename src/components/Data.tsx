import React, { useState, useEffect } from "react";
import { IUsers } from "../models/IUsers";
import { UserService } from "../Services/UserService";

interface IState {
  loading: boolean;
  users: IUsers[];
  errorMsg: string;
}

const Data: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUsers[],
    errorMsg: "",
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    UserService.getAllUsers()
      .then((res) => {
        console.log(res.data);
        setState({
          ...state,
          users: res.data,
          loading: false,
        });
      })
      .catch((err) => setState({ ...state, loading: false, errorMsg: err }));
  }, []);

  return (
    <>
      <h2> Kamal</h2>
      <table>
        <thead>
          <td> ID </td>
          <td> Name </td>
          <td> Username</td>
          <td> Email</td>
        </thead>
        <tbody>
          {state.users.map((singleUser, index) => {
            return (
              <tr key={index}>
                <td> {singleUser.id} </td>
                <td> {singleUser.name}</td>
                <td>{singleUser.username}</td>
                <td> {singleUser.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Data;
