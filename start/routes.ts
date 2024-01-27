import router from '@adonisjs/core/services/router'
const ControllerMainsController = () => import('#controllers/controller_mains_controller')
const PessoasController = () => import('#controllers/pessoas_controller')

router.post('index', [PessoasController, 'index'])
router.get('show', [PessoasController, 'show'])
router.post('destroy', [PessoasController, 'destroy'])
router.post('updade', [PessoasController, 'updade'])

router.resource('post', ControllerMainsController).apiOnly()
