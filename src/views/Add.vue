<template>
  <main>
    <Loader v-if="loading" />
    <div class="page-wrapper" v-else>
      <h1>Добавить новую песню</h1>
      <form @submit.prevent="onSubmit">
        <div class="input-field">
          <label for="authorName">Название автора:</label>
          <input type="text" id="authorName" v-model="artist" required>
        </div>
        <div class="input-field">
          <label for="songName">Название песни:</label>
          <input type="text" id="songName" v-model="songName" required>
        </div>
        <div class="input-field">
          <label for="songLyrics">Текст песни:</label>
          <textarea id="songLyrics" wrap="hard" v-model="lyrics" required></textarea>
        </div>
        <button type="submit" class="add-song">Добавить</button>
      </form>
    </div>
  </main>
</template>

<script>
  import Loader from '../components/Loader'
export default {
  data: () => ({
    artist: '',
    songName: '',
    lyrics: ``,
    loading: false
  }),
  methods: {
    onSubmit() {
      this.loading = true
      const song = {
        artist: this.artist,
        songName: this.songName,
        lyrics: this.lyrics,
        id: Date.now(),
        date: new Date().toJSON()
      }
      this.loading = false
      this.$router.push(`/list/${this.artist}/${this.songName}`)
      this.$store.dispatch('createSong', song)
      this.artist = this.songName = ''
      this.lyrics = ``
    }
  },

  components: {
    Loader
  }
}
</script>

<style lang="less" scoped>
  form {
    width: 60%;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 60px;
    
  }

  .add-song {
    display: block;
    border: none;
    background-color: #23232e;
    padding-right: 5rem;
    padding-left: 5rem;
    color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 25px;
    cursor: pointer;
    transition: .5s;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    

    &:hover {
      background-color: #141418;
      color: #e3e3e3;
    }
  }

  @media (max-width: 600px) {
    form {
      margin-bottom: 6rem;
    }

    .add-song {
      width: 100%;
    }
  }

  @media (max-width: 460px) {
    .add-song {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
</style>