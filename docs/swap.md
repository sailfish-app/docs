---
title: Swap
---

Sailfish Swap is our automated market maker (AMM) which facilitates swaps between pairs of tokens. We follow a constant-product formula to maintain an equal weight of each token in a pair. Liquidity providers can deposit any pair of tokens into the liquidity pool to start making markets and earning trading commissions. Traders can swap between any token pair that exists in the liquidity pool.

:::info
All functions are batch operations. Batches are not atomic, meaning that requests will be executed sequentially until one fails. Individual requests, however, are atomic.
:::

## Deposit

Any pair of asset can be deposited into the liquidity pool. If that market doesn't exist, it will be created. In return, a new Sailfish LP Token is minted and issued to the depositor. The LP token is a claim the assets inside the pool, along with fees earned from traders. LP Tokens can be freely transferred and traded, and be redeemed at any time by calling the `withdraw` function.

Each individual market (eg. ICPT/CYCLE) has its own LP Token.

:::tip
The total number of LP Tokens per market is variable. Each deposit or withdraw will mint or burn LP tokens, respectively.

You can calculate your percentage ownership of a liquidity pool by dividing your number of tokens by the total.
:::

## Withdraw

LP Tokens can be redeemed for the underlying tokens along with earned fees.

This function burns LP Tokens and transfers all underlying tokens to the owner.

## Swap

Swaps one token for another, assuming that the market exists.

## Get Quote

Gets the latest quote. For the desired pair and amount, return the expected swap amounts and average price.

## Get Pools

Retrieves information for specified or all liquidity pools. Returns token balances, LP Token data, and fee data.

## Get All Tokens

Retrieves the list of all unique tokens deposited.
