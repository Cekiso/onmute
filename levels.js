module.exports = function Onmute(pool) {

    var startMessage;

    async function createGame(levelName) {

        try {

            return startMessage;

        } catch (error) {
            console.log(error)
        }


    }
    async function challenge() {
        try {
            await pool.query(`select challenge_name from challenge where id=1;`);
            // return challenge_name.rows;
            return 'it working';
        } catch (error) {

        }

    }
    //updating the level and points 

    return {
        createGame,
        challenge
    }
}