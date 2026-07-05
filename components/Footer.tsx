export default function Footer() {  
  return (
    <footer className="bg-green-900 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {new Date().getFullYear()} | Rodrigo Serdotte Freitas | All rights reserved</p>
      </div>
    </footer>
  );
}