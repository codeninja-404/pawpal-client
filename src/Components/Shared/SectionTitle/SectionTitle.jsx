const SectionTitle = ({ heading }) => {
  return (
    <div className="text-center pb-10">
      <h1 className="uppercase text-4xl">{heading}</h1>
      <br />
      <hr className="border-gray-700 max-w-screen-md mx-auto" />
    </div>
  );
};

export default SectionTitle;
