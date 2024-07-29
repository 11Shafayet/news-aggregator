const Loader = () => {
  const loader = Array.from({ length: 9 }, (_, index) => index);

  return loader.map((item, i) => (
    <div
      key={i}
      className="shadow animate-pulse bg-gray-50 p-4 md:p-8 min-h-60 lg:min-h-96"
    />
  ));
};

export default Loader;
