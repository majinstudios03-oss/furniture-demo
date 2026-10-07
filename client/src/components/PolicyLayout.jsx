const PolicyLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="bg-brand-ivory min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16 border border-gray-100">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-walnut mb-4">{title}</h1>
          <p className="text-gray-500 mb-12 border-b border-gray-100 pb-8">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-lg max-w-none text-gray-600 prose-headings:font-serif prose-headings:text-brand-walnut prose-a:text-brand-terracotta prose-li:marker:text-brand-terracotta">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyLayout;
