'use strict';

/**
 *  order controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

const stripe = require('stripe')(
  'sk_test_51Ku02rB5BsWznSR5OJP8k3iwfh3vbPPBQR5V0fhDund8FGztOrOChSbaVe6r94tPj7wORHqBHUpB1KDhRDvkGvC300A7g3hz8D'
);

module.exports = createCoreController('api::order.order', ({strapi}) => ({

  /*async create(ctx, next) {
    const {body} = ctx.request;

    strapi.log.debug("ctx: ", JSON.stringify(ctx.request.body));
    const {address, amount, dishes, token, city, state} = JSON.parse(
      ctx.request.body
    );

    const stripeAmount = Math.floor(amount * 100);
    strapi.log.debug("user: ", JSON.stringify(ctx.state.user.id));

    // charge on stripe
    const charge = await stripe.charges.create({
      // Transform cents to dollars.
      amount: stripeAmount,
      currency: "usd",
      description: `Order ${new Date()} by ${ctx.state.user.id}`,
      source: token,
    });

    strapi.log.debug("charge: ", charge);
    strapi.log.debug("charge: ", JSON.stringify(ctx.request.body));


    // Register the order in the database
    const entity = await strapi.service('api::order.order').create({
      data: {
        user: ctx.state.user.id,
        token: charge.id,
        amount: stripeAmount,
        address,
        dishes,
        city,
        state,
      }
    });

    strapi.log.debug('Order created: ', entity);

    ctx.body = entity;

    return entity;
  }*/

}));
