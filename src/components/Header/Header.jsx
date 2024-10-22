import profile from '../../assets/img/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between m-5 border-b-2 py-5'>
      <h1 className='text-2xl font-semibold '>Knowledge cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;