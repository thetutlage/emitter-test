import { test } from '@japa/runner'
import Mail from '@ioc:Adonis/Addons/Mail'
import Event from '@ioc:Adonis/Core/Event'

test.group('Emitter', () => {
  test('Verify Email', async ({ assert }) => {
    const mailer = Mail.fake()
    await Event.emit('user::created', {})

    console.log(mailer.find(() => true))

    assert.isTrue(
      mailer.exists((mail) => {
        console.log(mail)
        return mail.subject === 'Verify email address'
      })
    )
  })
})
