import router from '@adonisjs/core/services/router'
const ControllerMainsController = () => import('#controllers/controller_mains_controller')
const PessoasController = () => import('#controllers/pessoas_controller')

router.get('/', [PessoasController, 'show'])
router.post('index', [PessoasController, 'index'])
router.post('destroy', [PessoasController, 'destroy'])
router.post('updade', [PessoasController, 'updade'])

router.resource('post', ControllerMainsController).apiOnly()
