;(function () {
  "use strict";
  if ( typeof Nonogram === "undefined" ) {
    window.Nonogram = {};
  }

  var View = Nonogram.View = function (board, $el) {
    this.board = board;
    this.solution = board.solution;
    this.$head = $el.find('.board-head');
    this.$body = $el.find('.board-body');
  };

  View.prototype.setupBoard = function () {
    for (var i = 0; i < this.board.dimX; i++) {
      var $th = $("<th></th>");
      var $hints = $("<ul></ul>");

      this.solution.topHint[i].forEach( function (hint) {
        var $hintItem = $("<li></li>");
        $hintItem.html(hint);
        $hints.append($hintItem[0]);
      });

      $th.html($hints[0]);
      this.$head.append($th[0]);
    }

    for (var i = 0; i < this.board.dimY; i++) {
      var $tr = $("<tr></tr>");
      var $hints = $("<ul></ul>");

      this.solution.leftHint[i].forEach( function (hint) {
        var $hintItem = $("<li></li>");
        $hintItem.html(hint);
        $hints.append($hintItem[0]);
      });

      var $td = $('<td></td>');
      $td.html($hints[0]);
      $tr.append($td[0]);

      for (var j = 0; j < this.board.dimX; j++) {
        var $td = $('<td></td>');
        $tr.append($td.attr("data-x", j).attr("data-y", i));
      }

      this.$body.append($tr[0]);
    }
  };

})();
