import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Pessoa extends BaseModel {
  update() {
    throw new Error('Method not implemented.')
  }

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: String
  @column()
  declare idade: number
  @column()
  declare sexo: String
  @column()
  declare descricao: String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
