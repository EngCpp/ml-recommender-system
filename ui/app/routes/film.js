import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return {
       selectedFilm: this.store.find('film', params.id),
       recommendations: this.store.findAll('recommendation')
    }
  },

  beforeModel() {
      this.store.unloadAll('recommendation');
      this.store.unloadAll('film');
  }
});
