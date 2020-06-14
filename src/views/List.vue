<template>
  <main>
    <h1>Song List</h1>
    <Loader v-if="loading" />
    <table v-else-if="songs.length">
      <thead>
        <tr>
          <th>Исполнитель</th>
          <th>Название песни</th>
          <th class="date">Дата добавления</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song of addedSongs" :key="song.id" class="song">
          <td class="artist-name">

            <button
              @click="$router.push(`/list/${song.artist}`)"
            >{{song.artist}}</button>
          </td>
          <td class="song-name">
            <button
              @click="$router.push(`/list/${song.artist}/${song.songName}`)"
            >{{song.songName}}</button>
          </td>
          <td class="date">
            <span>{{song.date | date('datetime')}}</span>
            
          </td>
          <td class="delete-btn-td">
            <button
              class="delete-btn"
              :data-id="song.id"
              @click="deleteSong(song.id)"
            ></button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Текстов пока нет!</p>
  </main>
</template>

<script>
  import Loader from '@/components/Loader'
export default {
  data: () => ({
    loading: false,
    songs: []
  }),

  mounted() {
    this.songs = this.$store.getters.songs
  },

  computed: {
    addedSongs() {
      this.songs = this.$store.getters.songs
      const songs = this.songs
      return songs 
    }
  },

  methods: {
    deleteSong(id) {
      this.$store.dispatch('deleteSong', id)
    }
  },

  components: {
    Loader
  }
}
</script>

<style lang="less" scoped>

  .artist-name button,
  .song-name button,
  .date {
    font-family: inherit;
    font-weight: 600;
  }

  .date {
    position: relative;
    z-index: 10;
  }

  button {
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
    font-size: 24px;
    padding: 0;
  }

  .delete-btn {
    opacity: 0;
    transition: .6s;
    border: none;
    background-color: transparent;

    width: 15px;
    height: 15px;

    top: 22px;
    left: 220px;

    cursor: pointer;

    z-index: 10;

    background-image: url('../assets/img/delete.svg')
  }

  .song:hover {
    .delete-btn {
      opacity: 1;
    }
  }

  .delete-btn-td {
    padding-right: 0;
  }

  

  p {
    margin-top: 100px;
    font-weight: bold;
  }

  td, th {
    padding-right: 50px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  th {
    font-weight: 700;
  }
  

  table {
    margin: 0 auto
  }

  .date {
    padding-right: 0;
  }

  
  @media (max-width: 1000px) {
    .delete-btn {
      left: 90%;
      vertical-align: center;
      opacity: 1;
    }

    td, td button, .date {
      font-size: 22px;
    }
  }

  

  @media (max-width: 747px) {
    table, td button, .date {
      font-size: 20px;
    }
    td, th {
      padding-right: 25px;
    }
  }

  @media (max-width: 539px) {
    table, td button, .date {
      font-size: 16px;
    }
  }

  @media (max-width: 451px) {
    td, th {
      padding-right: 10px;
    }
  }

  @media (max-width: 433px) {
    table, td button, .date {
      font-size: 12px;
    }
  }

  

  

</style>