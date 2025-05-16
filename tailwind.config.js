export default {
  plugins: [
    function({ addVariant }) {
      addVariant("open-menu", ".open-menu &");
    },
    function({ addVariant }) {
      addVariant("active", ".active&");
    }
  ]
}