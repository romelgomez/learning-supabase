import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const supabaseKey = process.env.SUPABASE_KEY;
const supabaseSubdomain = process.env.SUPABASE_SUB_DOMAIN;

if (!supabaseKey) {
  throw 'undefined .env var SUPABASE_KEY';
}

if (!supabaseSubdomain) {
  throw 'undefined .env var SUPABASE_SUB_DOMAIN';
}

const supabaseUrl = `https://${supabaseSubdomain}.supabase.co`;
const supabase = createClient(supabaseUrl, supabaseKey);

const main = async () => {
  const countriesWithCitiesQuery = await supabase.from('countries').select(`
    id,
    name,
    cities (
      id,
      name
    )
  `);

  const { data, error } = countriesWithCitiesQuery;

  data?.map((country) => {
    console.log('country.cities', country.cities);
  });

  if (error) throw error;

  // console.log(`\n\n ..:: countriesWithCities ::.. \n\n`);
  // console.log(
  //   JSON.stringify(
  //     {
  //       ...data,
  //     },
  //     null,
  //     2
  //   )
  // );
  // console.log(`\n\n<----\n\n`);
};

main();
