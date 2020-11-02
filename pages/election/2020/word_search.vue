<template>
  <section class="home">
    <h1 class="home__heading">2020 Word Search</h1>
    <table class="grid">
      <tr v-for="row in rows">
        <td v-for="letter in row">
          {{ letter }}
        </td>
      </tr>
    </table>
    <ul class="words">
      <li v-for="word in words"><input type="checkbox" /> {{ word }}</li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    const words = [
      'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
      'deleware', 'districtofcolumbia', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois',
      'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts',
      'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada',
      'newhampshire', 'newjersey', 'newmexico', 'newyork', 'northcarolina', 'northdakota', 'ohio',
      'oklahoma', 'oregon', 'pennsylvania', 'rhodeisland', 'southcarolina', 'southdakota',
      'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'westvirginia',
      'wisconsin', 'wyoming', 'america', 'ballot', 'biden', 'count', 'election', 'executive',
      'house', 'judicial', 'legislative', 'national', 'poll', 'popular', 'president', 'senate',
      'states', 'trump', 'united', 'virginia', 'vote',
    ];
    const letters = 'wenewjerseyjalaskaembmuxtnawnsanilorachtuostifvxnaanelblsukwlpndrdoasrnboblneilvbhpgsobolrwnlfyiicmntkeoncalaornnhphiahaeuowdugsawaardudoxeiaaaxniwlswttlapkhmvdaimtetsmtnnaogwytpyoeohaelonhidtiaioioaiirqrelcocxmoynohstoanvdyozinsoiamftirpasuitsavuifmewnidipeamouxusknstjiuallonunbarngzgktteihcnvcjsotcokosotalairrecamdiueiewsuosrktoaqivaypitihwjrappltitkzaygygunjmfrwvrdetepwpempcaqcqnnedibniwgktfnwioeaawpudehmichiganiiwzsacmainehzixhrtnhvmorkbphhaitennesseezjtmrtsnhmismoaaadmhposwnlcukriotaucovhirpxlrbtahbpaobaoonnswufttcseeodehccibwgusiznnuqcefcsrsgozpagndooaaienvzeostgdteaooadtuniawqruslrausrdgisxwaunumanlasxkyrinoaxoraetanesrteferoatlplvaiftqtdelewareiqasxromrnagnnuiagamzdxzkaksarbenilriotzaxlcwnkansasbfdetinumcoenmieaaalodnalsiedohrgkyfzacvtovicjudicialmassachusettssafseg';
    function make_grid(letters, size) {
      let grid = [];
      for (let r = 0; r < size; r++) {
        let row = [];
        for (let c = 0; c < size; c++) {
          const index = r * size + c;
          row.push(letters[index]);
        }
        grid.push(row);
      }
      return grid;
    }
    return {
      words: words,
      rows: make_grid(letters, 28)
    };
  },
};
</script>
<style>
.grid > tr {
  height: 20px;
}
.grid > tr > td {
  width: 20px;
  text-align: center;
}
.words li {
  display: inline-block;
  width: 170px;
  padding: 4px;
}
</style>
