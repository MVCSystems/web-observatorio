const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-4">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-full sm:col-span-2 md:col-span-4">
            <img src="img/logo_observatorio_jlo.png" alt="Banner" className="w-full" />
          </div>
          <div className="col-span-full sm:col-span-2 md:col-span-4">
            <div>Nosotros</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
              obcaecati. Possimus, illum placeat. Unde cupiditate assumenda iste nam
              excepturi dolor qui saepe provident voluptas! Vero minus, veritatis eos
              eligendi accusamus enim aspernatur est aut nobis, natus ratione!
              Cupiditate, iure porro.
            </p>
          </div>
          <div className="col-span-full sm:col-span-2 md:col-span-4">
            <div>QUe hacemos</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
              distinctio commodi. Numquam nemo molestiae necessitatibus saepe.
              Corporis cumque officia, nam dolore qui numquam quod repellendus
              laboriosam ea nobis dicta praesentium nihil consequuntur soluta optio
              nisi quam possimus neque. Magni, ut?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;