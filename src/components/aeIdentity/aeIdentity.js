import aeIdentityAvatar from './../aeIdentityAvatar/aeIdentityAvatar.vue'
import aeDivider from './../aeDivider/aeDivider.vue'
import aeButton from './../aeButton/aeButton.vue'
import helperMixin from './../../mixins/helper'
import BN from 'bn.js'

/**
 * Displays an Identity with an avatar blockie, the address and an amount of ether
 */
export default {
  name: 'ae-identity',
  components: { aeIdentityAvatar, aeDivider, aeButton },
  props: {
    /**
    * An object representing a identity. Must have a adress string a tokenBalance and a balance BigNumber (bn.js)
    */
    identity: {
      type: Object,
      default: {
        address: '0x0',
        tokenBalance: new BN('0', 10),
        balance: new BN('0', 10)
      }
    },
    /**
    * Is this an identity activated/selected (magenta) or not (grey)?
    */
    active: {
      type: Boolean,
      default: false
    },
    /**
    * Is this the full size identity card or the collapsed one for displaying at the bottom of the screen?
    */
    collapsed: {
      type: Boolean,
      default: false
    },
    /**
    * Have a blank identity card
    */
    blank: {
      type: Boolean,
      default: false
    }
  },
  mixins: [
    helperMixin
  ],
  methods: {
    /**
     * Make card active event
     *
     * @event activate
     * @type {undefined}
     */
    toggleActiveIdentityCard () {
      this.$emit('toggleActive')
    }
  },
  computed: {
    amount () {
      return this.identity ? helperMixin.methods.readableEther(this.identity.balance) : 0
    },
    tokenAmount () {
      return this.identity && this.identity.tokenBalance ? helperMixin.methods.readableToken(this.identity.tokenBalance) : '0'
    },
    address () {
      return this.identity.address
    },
    shortAddress () {
      return this.identity.address.substr(0, 6)
    },
    chunkAddress () {
      return this.identity.address.match(/.{1,7}/g)
    },
    classObject () {
      return {
        'ae-identity': true,
        'collapsed': this.collapsed,
        'active': this.active
      }
    }
  }
}
