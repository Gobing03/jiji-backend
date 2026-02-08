const supabase = require('../config/supabaseClient');

exports.askJiji = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || query.length < 3) {
      return res.status(400).json({ error: 'Invalid query' });
    }

    // Store the query
    await supabase.from('queries').insert({
      user_id: req.user.id,
      query_text: query,
    });

    // Find matching resource
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .ilike('topic', `%${query.toLowerCase()}%`);

    if (error || !data.length) {
      return res.status(404).json({ error: 'No resources found' });
    }

    const resource = data[0];

    return res.json({
      answer: `Here’s a simple explanation for "${query}"`,
      resources: {
        ppt: resource.ppt_url,
        video: resource.video_url,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};
