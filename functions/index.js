const { onRequest } = require('firebase-functions/v2/https')
const { logger } = require('firebase-functions')
const { Pool } = require('pg')
const cors = require('cors')

const pool = new Pool({
  user: 'postgres',
  host: '34.129.17.128',
  database: 'testDB',
  password: 'Password202%',
  port: 5432,
  ssl: { rejectUnauthorized: false },
})

exports.getJoinedSuicideFundingData = onRequest(
  {
    region: 'australia-southeast1',
    cors: true,
  },
  async (req, res) => {
    try {
      const query = `
        SELECT
          f.year,
          f.location,
          s.age_group,
          s.gender,
          f.funding_per_capita,
          s.suicide_rate,
          s.employment_status
        FROM
          mental_health_analysis_raw_data.mental_health_funding f
        JOIN
          mental_health_analysis_raw_data.suicide_rates s
          ON f.year = s.year AND f.location = s.location
        ORDER BY f.year;
      `
      const result = await pool.query(query)
      res.status(200).json(result.rows)
    } catch (err) {
      logger.error('Database error:', err)
      res.status(500).send('Error querying PostgreSQL')
    }
  },
)
