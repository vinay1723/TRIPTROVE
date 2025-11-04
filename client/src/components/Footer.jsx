function Footer() {
  return (
    <footer className="w-full px-3 py-4 flex  justify-between items-center bg-yellow-300 text-stone-700 text-xl sm:text-base">
      <div className="flex justify-center items-center gap-5">
        <div className="ml-3 flex justify-center items-center gap-2">
          <img src="./../../img/tours/icon.png" className="w-15 h-12" />
          <p className="font-semibold">TripTrove</p>
        </div>
        <p className="ml-3">@by TripTrove.All Rights reserved</p>
      </div>

      <ul className="font-semibold flex justify-center items-center gap-3 mr-10">
        <li>About us</li>
        <li>DownloadApps</li>
        <li>Become guide</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </footer>
  );
}

export default Footer;
