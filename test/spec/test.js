/* global describe, it */

(function () {
    'use strict';

    describe('Are these things present?', function () {
        describe('These elements should exist', function () {

            it('should have an array', function () {
              expect('an "list" array to be present').to.exist;
            });
        });
    });
})();
