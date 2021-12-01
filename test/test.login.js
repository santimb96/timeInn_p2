import assert from 'assert';
import {login} from '../src/js/modules/loginSystem.mjs';

describe('Test validar email', function () {
    it('valida correctamente!', () => {
        assert.equal(login.validarEmail('adminadmin@adminer.com'), true);
    });
});

describe('Test validar password', function () {
    it('valida correctamente!', () => {
        assert.equal(login.validarPassword('AdminAd123'), true);
    });
});

describe('Test validar todo', function () {
    it('valida correctamente!', () => {
        assert.deepEqual(login.validarTodo('adminadmin@adminer.com', 'AdminAd123'), ['admin', true]);
        assert.deepEqual(login.validarTodo('adminadmin@adminer.com', ''), ['', false]);
    });
});

describe('Test validar password1 === password2', function () {
    it('valida correctamente!', () => {
        assert.equal(login.passwordsIguales('AdminAd123', 'AdminAd123'), true);
        assert.notEqual(login.passwordsIguales('AdminAd123', 'AdminAd124'), true);
    });
});

describe('Test validar register', function () {
    it('valida correctamente!', () => {
        assert.equal(login.register('santi', 'santisanti@santi.com', 'AdminAd123', 'AdminAd123'), true);
        assert.notEqual(login.register('santi', 'santisanti@santi.com', 'AdminAd123', 'AdminAd124'), true);
    });
});







