<template>
  <main>
    <div>
      <h1>{{song.artist}} - {{song.songName}}</h1>
      <pre>{{song.lyrics}}</pre>
    </div>
  </main>
</template>


<script>
  export default  {
    data: () => ({
      song: null,
    }),

    mounted() {
      const artist = this.$route.params.artist
      const songName = this.$route.params.song
      
      
      this.song = this.$store.getters.songs.find(song => song.artist === artist && song.songName === songName)
    },
  }
</script>


<style>

  pre {
    text-align: center;
    white-space: pre-wrap;
    font-family: inherit;
    line-height: 3rem;
    font-weight: 700;
  }


  div {
    margin: 0 auto
  }

  @media (max-width: 1000px) {
    pre {
      
      text-align: left;
    }
  }
</style>