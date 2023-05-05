self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
      if (label === 'typescript' || label === 'javascript') {
        return './ts.worker.bundle.js';
      }
      return './editor.worker.bundle.js';
    },
  };
  