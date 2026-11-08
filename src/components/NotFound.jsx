import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import '../styles/notfound.css';

export default function NotFound({ onOpenModal }) {
  return (
    <main className="notfound">
      <div className="container notfound-inner">
        <span className="notfound-code">404</span>
        <h1 className="notfound-title">This page took a wrong turn</h1>
        <p className="notfound-text">
          The page you're looking for doesn't exist or may have moved. The rest of the
          site is running fine — here are some good places to head next.
        </p>
        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            Back to Home
            <Icon name="arrow" size={18} />
          </Link>
          <Link to="/about" className="btn btn-outline btn-lg">About Us</Link>
          <button className="btn btn-outline btn-lg" onClick={onOpenModal}>
            Request a Quote
          </button>
        </div>
      </div>
    </main>
  );
}
