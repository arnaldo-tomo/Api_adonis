import Pessoa from '#models/pessoa'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import { promises } from 'fs'

export default class PessoasController {
  async index({ request }: HttpContext) {
    const dbe = new Pessoa()
    dbe.nome = request.input('nome')
    dbe.sexo = request.input('sexo')
    dbe.idade = request.input('idade')
    dbe.descricao = request.input('descricao')
    const saved = await dbe.save()
    return saved
  }

  async show() {
    const all1 = await User.all()
    return all1
  }

  async destroy({ request }: HttpContext) {
    const id = request.input('id')
    const find = await Pessoa.findOrFail(id)
    await find.delete()
    return find
  }
  async updade({ request }: HttpContext) {
    const id = request.input('id')
    const find = await Pessoa.findOrFail(id)
    find.nome = 'Rivaldo Nelson Tomo'
    find.sexo = 'Masculino'
    find.descricao = 'Abençoado Muito'
    find.idade = 27
    await find.save()
    return find
  }
}
