import { Parallax} from 'react-parallax';

const TopBanner = ({image,title,sub_title}) => {
  return (
    
    <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the Menu"
        strength={-200}
    >
         <div
      className="hero min-h-[80vh] bg-fixed" 
    >
      <div className="hero-content text-center text-neutral-content bg-slate-900  bg-opacity-60 px-80 p-24 ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5 ">
            {sub_title? sub_title : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, itaque? Distinctio dicta iure libero ."}
            
          </p>
        </div>
      </div>
    </div>

    </Parallax>
   
  );
};

export default TopBanner;
