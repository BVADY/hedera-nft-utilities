/*-
 *
 * Hedera NFT Utilities
 *
 * Copyright (C) 2023 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
const { validator, defaultVersion } = require('../..');

function main() {
    const metadataInstance = {
        "creator": "HANGRY BARBOONS",
        "description": "HANGRY BARBOONS are 4,444 unique citizens from the United Hashgraph of Planet Earth. Designed and illustrated by President HANGRY.",
        "format": "none",
        "name": "HANGRY BARBOON #2343",
        // removed image property which is required by HIP412@2.0.0
        "type": "image/png",
        "properties": { "edition": 2343 },
        "attributes": [
          { "trait_type": "Background", "value": "Yellow" },
          { "trait_type": "Fur", "value": "Gold" },
          { "trait_type": "Clothing", "value": "Floral Jacket" },
          { "trait_type": "Mouth", "value": "Tongue" },
          { "trait_type": "Sing", "value": "None" }
        ]
    }

    const results = validator(metadataInstance, defaultVersion);
    console.log(results);

    /* Output:
        {
            errors: [
                {
                    type: 'schema',
                    msg: "requires property 'image'",
                    path: 'instance'
                }
            ],
            warnings: []
        }
    */
}

main();