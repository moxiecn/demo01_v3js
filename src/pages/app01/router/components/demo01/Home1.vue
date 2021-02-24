<script>
export default {
  data() {
    return {
      isAuthenticated: true,
    };
  },
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username;
    },
  },
  methods: {
    goToDashboard() {
      if (this.isAuthenticated) {
        this.$router.push("/dashboard");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style  scoped>
</style>