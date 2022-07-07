import("dotenv").then(x => x.config());
import express from 'express';

const PORT = process.env.PORT || 3000;

(async (): Promise<void> => {
    express()
        .listen(PORT, () => console.log(`Listening on port ${PORT}`));
})();