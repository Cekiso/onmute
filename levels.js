module.exports = function Onmute(pool) {

	async function createGame(levelName) {

		const result = await pool.query(`insert into levels (level_name) values ($1) returning id`, [levelName]);
		if (result.rowCount === 1) {
			return result.rows[0].id;
		}
		return null;
	}

	async function listShops() {
		const result = await pool.query(`select * from shop`);
		return result.rows;
	}

	async function dealsForShop(shopId) {
		const result = await pool.query(`select * from avo_deal where shop_id = $1`, [shopId]);
		return result.rows;
	}
    return{
        createGame,
        Onmute

    }
}
