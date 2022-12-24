// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/api/randImage.tsx";
import * as $2 from "./routes/dad.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/mum.tsx";
import * as $5 from "./routes/nell.tsx";
import * as $$0 from "./islands/GatedMessage.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/api/randImage.tsx": $1,
    "./routes/dad.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/mum.tsx": $4,
    "./routes/nell.tsx": $5,
  },
  islands: {
    "./islands/GatedMessage.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;