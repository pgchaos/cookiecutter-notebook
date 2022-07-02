module.exports = {
    types: [
      { types: ["feat"], label: "🎉 New Features" },
      { types: ["fix"], label: "🐛 Fixes" },
      { types: ["improv"], label: "🔨 Improvements" },
      { types: ["ci"], label: "🏗️ Build System" },
      { types: ["docs"], label: "📚 Documentation Changes" },
      { types: ["test"], label: "🔍 Tests" },
      { types: ["style"], label: "💅 Code Style Changes" },
      { types: ["chore"], label: "🧹 Chores" }
    ],
  
    renderTypeSection: function (label, commits) {
      let text = `\n## ${label}\n`;
  
      commits.forEach((commit) => {
        text += `- ${commit.subject}\n`;
      });
  
      return text;
    },
  
    renderChangelog: function (release, changes) {
      const now = new Date();
      return `# ${release} - ${now.toISOString().substr(0, 10)}\n` + changes + "\n\n";
    },
  };