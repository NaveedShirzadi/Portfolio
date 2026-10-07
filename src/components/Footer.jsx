import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with React and
        Vite.
      </p>
    </footer>
  );
}
