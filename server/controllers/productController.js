import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {};

    const category = req.query.category ? { category: req.query.category } : {};
    
    // Sort logic
    let sortObj = {};
    if (req.query.sort === 'price_asc') sortObj = { price: 1 };
    else if (req.query.sort === 'price_desc') sortObj = { price: -1 };
    else if (req.query.sort === 'rating') sortObj = { rating: -1 };
    else sortObj = { createdAt: -1 }; // newest by default

    const products = await Product.find({ ...keyword, ...category }).sort(sortObj);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch trending products
// @route   GET /api/products/trending
// @access  Public
export const getTrendingProducts = async (req, res) => {
  try {
    const products = await Product.find({ isTrending: true }).limit(8);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
