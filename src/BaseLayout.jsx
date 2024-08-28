import './BaseLayout.css';
import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <div className="Container">
      <div className="BaseLayout">
        <Outlet />
      </div>
    </div>
  );
}
