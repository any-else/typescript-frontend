import Input from "antd/es/input/Input";
import { Button } from "antd/es/radio";
import Title from "antd/es/typography/Title";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../apps/store";
import { UserService } from "../../../services/user.service";

const ManageUser: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listUser: any = useSelector((state: RootState) => state.user.data);

  React.useEffect(() => {
    dispatch(UserService.searchAndPaging());
  }, [dispatch]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title level={3}>Quản lý tài khoản</Title>
        <Button type="primary" className="bg-blue-600 rounded text-cyan-200">
          Thêm mới User
        </Button>
      </div>
      <div className="flex justify-between">
        <Button className="w-40 rounded">Thêm mới hàng loạt</Button>
        <Input className="w-80" placeholder="Tìm kiếm theo email và name" />
      </div>
      <div className="">
        <table className="w-full mt-6">
          <thead>
            <tr>
              <th>
                <Input type="checkbox" name="" id="" />
              </th>
              <th>Tên</th>
              <th>Giới tính</th>
              <th>Ngày Sinh</th>
              <th>Email</th>
              <th>Lớp</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {listUser &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              listUser.result.map((user: any) => {
                return (
                  <tr key={user.UserId}>
                    <td>
                      <Input type="checkbox" name="" id="" />
                    </td>
                    <td>{user.UserName}</td>
                    <td>{user.Gender}</td>
                    <td>{user.DateOfBirth}</td>
                    <td>{user.Email}</td>
                    <td>{user.ClassName}</td>
                    <td>
                      <Button className="bg-green-500 mr-1 text-gray-200">
                        Sửa
                      </Button>
                      <Button className="bg-red-500 mr-1 text-gray-200">
                        Xoá
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="">Hiển thị 100 bản ghi</div>
      <div className="flex flex-col justify-between items-center gap-2 ">
        <select name="" id="">
          <option value={10}>Hiện thị 10 bản ghi trên trang</option>
          <option value={20}>Hiện thị 20 bản ghi trên trang</option>
          <option value={50}>Hiện thị 50 bản ghi trên trang</option>
          <option value={70}>Hiện thị 100 bản ghi trên trang</option>
        </select>
        <div className="flex justify-center gap-1">
          <Button className="bg-green-500">Trước</Button>
          <Button className="bg-red-500">Tiếp</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
