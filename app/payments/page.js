"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (acceptTerms) {
      // Process payment logic here
      console.log('Processing payment...')
      router.push('/confirmation')
    } else {
      alert('Please accept the terms and conditions to proceed.')
    }
  }

  return (
    <div className="bg-background text-foreground">
      <main className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Payment
          </h1>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Complete Your Payment</CardTitle>
              <CardDescription>Please enter your payment details to finalize your booking.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Payment Method</Label>
                    <RadioGroup
                      id="payment-method"
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card">Credit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  {paymentMethod === 'credit-card' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry-date">Expiry Date</Label>
                          <Input id="expiry-date" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name on Card</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms()}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      ,{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>
                      , and authorize this payment
                    </Label>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" onClick={handleSubmit}>
                Pay Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}